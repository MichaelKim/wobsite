---
layout: post
title: The C++17 Standard
date: 2017-12-05
path: /cpp17-standard
tags: code
---

Recently, the C++17 official standard was published, introducing another batch of new features. These features aren't groundbreaking, but do provide developers with some sweeter syntax to work with.

Although I've been using C++ less often due to focusing on web dev, it's the first programming language I've learned, and my go-to language for most tasks.

So coming soon to compilers near you (some already have experimental support), here are some of the new upcoming features that I'm excited about:

### Standard filesystem library

Based on the Boost's filesystem library, `std::filesystem` provides a lightweight and cross-platform solution to managing files. Even something simple as listing files in a directory can be rather cumbersome in C++, and doesn't appear neatly with the syntax of the standard library.

#### Windows (taken from [MSDN](<https://msdn.microsoft.com/en-us/library/aa365200(v=vs.85).aspx>))

```c++
#include <windows.h>
#include <tchar.h>
#include <stdio.h>

void _tmain(int argc, TCHAR *argv[]) {
    WIN32_FIND_DATA FindFileData;
    HANDLE hFind;

    _tprintf (TEXT("Target file is %s\n"), argv[1]);
    hFind = FindFirstFile(argv[1], &FindFileData);
    if (hFind == INVALID_HANDLE_VALUE) {
        printf ("FindFirstFile failed (%d)\n", GetLastError());
        return;
    }
    else {
        _tprintf (TEXT("The first file found is %s\n"),
                FindFileData.cFileName);
        FindClose(hFind);
    }
}
```

#### Unix (taken from [man pages](https://www.manpagez.com/man/3/opendir/))

```c++
len = strlen(name);
dirp = opendir(".");
while ((dp = readdir(dirp)) != NULL)
    if (dp->d_namlen == len && !strcmp(dp->d_name, name)) {
        (void)closedir(dirp);
    }
}
(void)closedir(dirp);
return NOT_FOUND;
```

Both methods reflect their platforms' syntaxes: Windows with a Win32 API approach, and Unix with a C approach. However, neither of them match a truly C++ style.

#### C++17 (taken from [C++ reference](http://en.cppreference.com/w/cpp/filesystem/directory_iterator))

```c++
#include <string>
#include <iostream>
#include <filesystem>
namespace fs = std::filesystem;

int main() {
    std::string path = "path_to_directory";
    for (auto & p : fs::directory_iterator(path)) {
        std::cout << p << std::endl;
    }
}
```

Tell me that doesn't look more appealing to the (C++) eye!

### Initialization with if

The `if` statement gets two new forms, allowing for intialization scoped only to the `if-else` block.

A common use case is when searching in containers:

```c++
std::map<int, int> my_map = ...;
auto it = my_map.find(5);
if (it == my_map.end()) {
    std::cout << "Not found" << std::endl;
}
else {
    std::cout << it->second << std::endl;
}
```

With initial statements in `if`, that can be rewritten more succintly:

```c++
std::map<int, int> my_map = ...;
if (auto it = my_map.find(5); it == my_map.end()) {
    std::cout << "Not found" << std::endl;
}
else {
    std::cout << it->second << std::endl;
}
```

This new variation provides a compact form of initialization with tighter scope control.

Personally, this reminded me of something from code golf:

```c++
int a;
if (a = 5, a < 6) {
    // ...
}
```

### Structured Bindings

I thought this was an interesting addition since it bears resemblance to a ES6 feature: destructing assignment.

To unpack the values of a `std::tuple`, each variable needed to be declared separately,

```c++
auto my_tuple = std::make_tuple(3, 'c');
int first;
char second;
std::tie(first, second) = my_tuple;
// or
auto my_tuple = std::make_tuple(3, 'c');
int first = std::get<0>(my_tuple);
char second = std::get<0>(my_tuple);
// or with a std::pair
auto my_pair = std::make_pair(3, 'c');
int first = my_pair.first;
char second = my_pair.second;
```

Now, these variables can be declared inline, resulting in a cleaner one-liner,

```c++
auto my_pair = std::make_pair(3, 'c');
auto [first, second] = my_pair;
```

One downside to `std::tie` is that due to separate declaration, they can't be references,

```c++
auto my_tuple = std::make_tuple(3, 'c');
int& first; // ack! uninitialized reference!
char second;
std::tie(first, second) = my_tuple;
```

This leaves only `std::get` for grabbing references, unless you use C++17,

```c++
auto my_tuple = std::make_tuple(3, 'c');
auto& [first, second] = mypair;
```

In addition, structs can be unpacked the same way,

```c++
struct {
    int i;
    char c;
} my_struct = {3, 'c'};
auto [first, second] = my_struct;
```

### std::string_view

This is a feature I never thought I would need, until I heard about it.

In a nutshell, it's a non-owning reference to a string:

```c++
struct string_view {
    size_t size;
    const char* str;
};
```

The main benefit here is performance: a `std::string_view` avoids copying data, which allows for no memory allocation in some cases.

```c++
void foo(std::string str) { ... }

std::string str = "abcdefghijklmnopqrstuvwxyz"; // Allocation
std::string sub = str.substr(5);                // Allocation, O(n)
foo(str);                                       // Allocation

void foo_view(std::string_view str) { ... }

std::string_view str_view = "abcdefghijklmnopqrstuvwxyz"; // Allocation
std::string_view sub_view = str_view.substr(5);           // Free!, O(1)
foo_view(str_view);                                       // Free!
```

Another benefit is that getting a substring becomes constant-time with `std::string_view`, which is far faster than the linear-time substring for `std::string`.

### Removal of trigraphs

Trigraphs are one of those features you forget that they exist, and resurface either as trivia or a _horrible_ bug.

I found this change rather amusing. Trigraphs are such an esoteric and rarely used feature, so I thought no one would bother removing it. However, now that they are planned for removal, why wasn't this done before? Turns out it was actually [proposed in C++14](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2009/n2837.pdf), but cancelled due to the backlash from IBM.

Devised by IBM in the 1960s, [EBCDIC](https://en.wikipedia.org/wiki/EBCDIC), short for _Extended Binary Coded Decimal Interchange Code_, is an ancient form of character encoding used mainly by IBM mainframes. Unlike ASCII, some EBCDIC users lack special characters like brackets and rely on trigraphs to use them.

Interestingly, EBCDIC still has relevance in the modern world, thanks to ['some of the major banks in North America who continue to use IBM machines to perform check clearing operations'](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2014/n4210.pdf).

So if you happen to regularly use trigraphs in your C++ code (why??!), you'd better reconsider your habits before upgrading.
