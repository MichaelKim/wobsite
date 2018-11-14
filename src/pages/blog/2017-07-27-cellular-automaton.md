---
layout: post
title: Google, Rabbits, and Cellular Automata
date: 2017-07-27
path: /cellular-automaton
tags: code
excerpt: You've escaped Commander Lambda's exploding space station, but there's an expanding nebula in the way! Find out how to escape Google's conundrum using cellular automata!
---

A few weeks ago, a friend of mine sent me a link, telling me it's a series of programming questions. When I opened it, it brought me to an odd looking website hosted by Google. Feeling curious, I hopped in the rabbit hole wondering where it will lead me. Two weeks later of on and off coding, I emerged successful, satisfied, and with a renewed love for Python.

That website was Foobar, a hidden recruiting website by Google. I received a referral link from that friend who also attempted the challenge (who was also referred by a friend).

<div class="imagebox">
    <img src="/images/foobar.png" style="width: 50%;">
</div>

The challenge consists of five levels of programming questions in increasing difficulty. Unlike other online judges, the interface has no buttons to click. Instead, it's centered around a virtual terminal with several common shell commands (e.g. `ls`, `cat`, `cd`, etc.). While neither `vi` nor `emacs` are available, `edit` opens a small editor which shares the screen with the terminal.

I was going to write this post about all the questions I've solved, but I found the last one particularly interesting and felt it deserved a whole post.

Here is the problem verbatim, taken slightly out of context from Google's storyline:

### Expanding Nebula

You've escaped Commander Lambda's exploding space station along with numerous escape pods full of bunnies. But - oh no! - one of the escape pods has flown into a nearby nebula, causing you to lose track of it. You start monitoring the nebula, but unfortunately, just a moment too late to find where the pod went. However, you do find that the gas of the steadily expanding nebula follows a simple pattern, meaning that you should be able to determine the previous state of the gas and narrow down where you might find the pod.

From the scans of the nebula, you have found that it is very flat and distributed in distinct patches, so you can model it as a 2D grid. You find that the current existence of gas in a cell of the grid is determined exactly by its 4 nearby cells, specifically, (1) that cell, (2) the cell below it, (3) the cell to the right of it, and (4) the cell below and to the right of it. If, in the current state, exactly 1 of those 4 cells in the 2x2 block has gas, then it will also have gas in the next state. Otherwise, the cell will be empty in the next state.

For example, let's say the previous state of the grid (p) was:

    .O..
    ..O.
    ...O
    O...

To see how this grid will change to become the current grid (c) over the next time step, consider the 2x2 blocks of cells around each cell. Of the 2x2 block of [p[0][0], p[0][1], p[1][0], p[1][1]], only p[0][1] has gas in it, which means this 2x2 block would become cell c[0][0] with gas in the next time step:

    .O -> O
    ..

Likewise, in the next 2x2 block to the right consisting of [p[0][1], p[0][2], p[1][1], p[1][2]], two of the containing cells have gas, so in the next state of the grid, c[0][1] will NOT have gas:

    O. -> .
    .O

Following this pattern to its conclusion, from the previous state p, the current state of the grid c will be:

    O.O
    .O.
    O.O

Note that the resulting output will have 1 fewer row and column, since the bottom and rightmost cells do not have a cell below and to the right of them, respectively.

Write a function answer(g) where g is an array of array of bools saying whether there is gas in each cell (the current scan of the nebula), and return an int with the number of possible previous states that could have resulted in that grid after 1 time step. For instance, if the function were given the current state c above, it would deduce that the possible previous states were p (given above) as well as its horizontal and vertical reflections, and would return 4. The width of the grid will be between 3 and 50 inclusive, and the height of the grid will be between 3 and 9 inclusive. The answer will always be less than one billion (10^9).

#### Test cases

`g = [[true, false, true], [false, true, false], [true, false, true]]` => 4

`g = [[true, false, true, false, false, true, true, true], [true, false, true, false, false, false, true, false], [true, true, true, false, false, false, true, false], [true, false, true, false, false, false, true, false], [true, false, true, false, false, true, true, true]]` => 254

`g = [[true, true, false, true, false, true, false, true, true, false], [true, true, false, false, false, false, true, true, true, false], [true, true, false, false, false, false, false, false, false, true], [false, true, false, false, false, false, true, true, false, false]]` => 11567

### The Game of Life

At first, this may sound familiar to [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). They're both examples of cellular automata: a model of a grid of "cells" in some number of states that evolves over discrete time steps according to a set of rules. Usually, these cells are in a square grid, can be in one of two states, and the next evolution depends on the states of a cell and its neighbouring cells. Conway's example follow these rules, with the states being "alive" or "dead", along with the specific evolution rules:

1.  Any live cell with less than two neighbouring live cells will die (from underpopulation).
2.  Any live cell with two or three neighbouring live cells will stay alive.
3.  Any live cell with more than three neighbouring live cells will die (from overpopulation).
4.  Any dead cell with three neighbouring live cells will become alive (from reproduction).

As simple as these rules are, the Game of Life produces extremely complex patterns and a wide variety of behaviors. In fact, it is proven to be Turing complete, and people have made [Turing machines within it](http://rendell-attic.org/gol/tm.htm). And once you achieve Turing-completeness, you can do [pretty much anything](https://www.youtube.com/watch?v=xP5-iIeKXE8).

### Reversibility

Another characteristic of the Game of Life is that it is not reversible. A reversible cellular automaton has a unique predecessor state for every possible state. This can be easily seen as there are many states that evolve into a blank grid (i.e. all the cells die off).

Although the Game of Life is similar to Google's problem, there's one twist to the evolution rules: with each time step, the size of the grid shrinks by one cell. This makes it trivial to show its non-reversibility: all states will eventually become nothing.

While it is possible to determine whether a 1-dimensional automaton is reversible, the same problem is undecidable for higher dimensions.

For non-reversible cellular automata, there exists some state that has no predecessor. These states are called Garden of Eden patterns. Finding these states is also a similar conundrum. For one-dimensional cellular automata, there exists an algorithm that takes time polynomial of the size of its rule table, but for higher dimensions, it remains an undecidable problem. Despite this, many researchers have found Garden of Eden patterns for the Game of Life, with continually smaller sizes.

### Solution

A brute-force solution (i.e. simply generating all m+1 x n+1 grids and checking their next step) will be O(m \* n \* 2^(m\*n)) and definitely take too long, so I started with a better approach.

Rather than testing all possible grids, it would be faster to generate predecessors cell by cell. This only goes through actual predecessors and skips those that aren't. One other choice I made was to split the grid into columns, and try to break into subproblems.

The grid is first split into columns, basically turning the grid into multiple 1-dimensional grids. Then for each m x 1 column, find all (m+1 x 2) grids that evolve into the column. This can be done by using DFS along the column, building up all possible column predecessors. Two cells must be added to the m+1 x 2 grid with every cell in the column. There are several cases to consider, but overall this step should take O(m \* 2^n).

If any of these columns don't have any predecessors, then the whole grid also doesn't have any predecessors, or is a Garden of Eden.

Now we have a list of predecessors for each column in the grid. To build the whole grid, we need to chain these column predecessors. Since a column predecessor has two columns, the second column will overlap with the predecessor of the next column. A valid predecessor for the entire grid will consists of multiple column predecessors that each share one column (the overlap). If there are two columns without any overlapping column predecessors, then the grid is again a Garden of Eden. A naive brute-force will take O(m \* n \* p^2), where p is the average number of column predecessors per column. Note that p can be very big, up to 2^n as shown above, so this step takes considerably long time.

One key part of the problem is that the constraints of the grid are very skewed: a max width of 50 but only a max height of 10. Even with an exponential solution, it may be fast enough if it's only exponential of the height of the grid (2^10 = 1024; 2^50 = 1024^5).

Nevertheless, it was far too slow and solved about 3/10 of the test cases. I would need some improvements to this approach.

### Improvements

Rather than storing the entire column predecessor, I could convert into two binary numbers, one for each column in the column predecessor. I only need to check if two column predecessors are equal or not, and comparing two integers is faster.

Also, the column predecessors can be found and joined in succession. The only factor that affects if a column predecessor can be joined is if it overlaps with a previous column predecessor, so there's no need to find then for all columns, then joined after. This greatly reduces the space needed from all columns to two columns.

Finally, represent the column predecessors as a simple graph. Each column predecessor can be visualized as a node with two values, the binary values for each column. Grouping and ordering the processors into their original column, the number of paths from a predecessor from the first column to one from the last column is the number of predecessors of the grid.

Even though many column predecessors can share a column, their previous columns are not important in finding the next one; only the number of column predecessors that share that column is needed. Since each predecessor's nodes are distinct and can't be backtracked, a [simple DP solution](https://cs.stackexchange.com/questions/3078/algorithm-that-finds-the-number-of-simple-paths-from-s-to-t-in-g) can solve for the answer.

This step also only requires two column predecessors to calculate each step. Hence, this step can be done iteratively as well to save memory.

In the end, this method runs in O(m \* 2^n) time and O(2^n) space, and is fast enough to solve Google's problem.

```
          ((`\
      ____ \\ \--.
    _/   ``     0 }
   /    \   '. __/
  (     /_  \ \_\_
 {_\______)~~\__\_)
```

### Example

Let's run through the first test case as an example to visualize how the solution works:

    O.O
    .O.
    O.O

We first need to generate all the column predecessors of `O.O`. To do so, let's focus on the first cell: `O`. Here are the four predecessors of `O`:

```
..  ..  O.  .O
.O  O.  ..  ..
```

Notice how the two left-hand cells are either `. / .`, `. / O`, or `O / .`. They can't be `O / O` since that would make the number of `O`s in the 2x2 grid not equal than 1. Instead, if the original cell was `.`, `O / O` would be a valid start.

Next, we consider `O.`. These predecessors can be generated by adding onto the previous four that we found for `O`:

```
..  ..  O.  .O
.O  O.  ..  ..

\/  \/  \/  \/

..  ..  O.  .O
.O  O.  ..  ..
.O  .O  ..  ..

..  ..  O.  .O
.O  O.  ..  ..
O.  O.  OO  OO

..  ..
.O  O.
OO  OO
```

The left three grids are created from the first 2x2 predecessor, and the other grids are created similarly. Finally, with the last cell, we'll have all of the column predecessors of `O.O`.

```
..  ..  ..  ..
.O  O.  O.  .O
.O  .O  O.  O.
..  ..  ..  ..

O.  O.  .O  .O
..  ..  ..  ..
..  ..  ..  ..
O.  .O  O.  .O
```

We've eliminated some the choices since their third column is `O / O`. This can't be possible as the last cell in the original column is `O`. Now that we have the column predecessors of `O.O`, we can convert them into binary, and continue to the next column.

```
..  ..  ..  ..
.O  O.  O.  .O
.O  .O  O.  O.
..  ..  ..  ..
06  42  60  24

O.  O.  .O  .O
..  ..  ..  ..
..  ..  ..  ..
O.  .O  O.  .O
90  81  18  09
= [0,6], [4,2], [6,0], [2,4], [9,0], [8,1], [1,8], [0,9]
```

A small thing to note is for every column predecessor, there is a reversed one (e.g. [0,6] => [6,0]). This is because swapping the columns of a column predecessor doesn't change the number of `O`'s in any 2x2 block.

To save space, here are the column predecessors of the second column `.O.`:

    [13,9], [12,8], [9,13], [8,12], [11,9], [11,8], [10,9], [9,11], [9,10], [8,11], [13,1], [12,0], [9,5], [8,4], [5,9], [4,8], [1,13], [0,12], [3,1], [3,0], [2,1], [1,3], [1,2], [0,3]

Since the first column is the same as the third column, we're done finding the column predecessors.

If we combine the column predecessors of the first two columns, we'll get 16 different predecessors (finding them is left as an exercise for the reader).

Repeating the step with the column predecessors of the last column, we get the following predecessors:

```
[1,8,4,2], [2,4,8,1], [4,2,1,8], [8,1,2,4]
 . O . .    . . O .    . . . O    O . . .
 . . O .    . O . .    O . . .    . . . O
 . . . O    O . . .    . O . .    . . O .
 O . . .    . . . O    . . O .    . O . .
```

### Improving the Example

Since we don't actually need the full predecessors (only how many there are), we can improve the speed of the algorithm (as mentioned in the previous section).

Let's represent the column predecessors based on their right column like this instead,

```
0: [9, 6], 1: [8], 2: [4], 4: [2], 6: [0], 8: [1], 9: [0]
=> {0: 2}, {1: 1}, {2: 1}, {4: 1}, {6: 1}, {8: 1}, {9: 1}
```

i.e. there are two column predecessors with a right column of 0, one with 8, etc. The sum of these values is 2 + 1 + 1 + 1 + 1 + 1 + 1 = 8, representing the number of predecessors for the first column. This matches what we found before, except this time we ignored what the actual predecessors are.

Similarly, here are the predecessors for the second column:

```
0: [12, 3], 1: [13, 3, 2], 2: [1], 3: [1, 0], 4: [8], 5: [9], 8: [12, 11, 4], 9: [13, 11, 10, 5], 10: [9], 11: [9, 8], 12: [8, 0], 13: [9, 1]
```

There are two column predecessors with the right column 0: [12,0] and [3,0]. Since there aren't any column predecessors for the first column that have a right column of 12 or 3, there aren't any predecessors for the two columns that end in 0. For 1, there is one that ends in 2 but none for 3 or 13, so there's only one predecessor (namely [4,2,1]). Continuing for the rest of the column predecessors yields this:

`{0: 0}, {1: 1}, {2: 1}, {3: 3}, {4: 1}, {5: 1}, {8: 1}, {9: 0}, {10: 1}, {11: 2}, {12: 3}, {13: 2}`

Finally, we add the column predecessors of the last column.

It is easy to see how this method breaks the problem down into subproblems: it counts the number of predecessors of a section of the grid (e.g. the first three columns), then adds in the next column. This iterative method allows us to only store the column predecessors of two columns at any time, which saves space.

In short:

1.  Predecessors: `0: [9, 6], 1: [8], 2: [4], 4: [2], 6: [0], 8: [1], 9: [0]`

- Ending with right column: `{0: 2}, {1: 1}, {2: 1}, {4: 1}, {6: 1}, {8: 1}, {9: 1}`
- 8 predecessors for `O`

2.  Predecessors: `0: [12, 3], 1: [13, 3, 2], 2: [1], 3: [1, 0], 4: [8], 5: [9], 8: [12, 11, 4], 9: [13, 11, 10, 5], 10: [9], 11: [9, 8], 12: [8, 0], 13: [9, 1]`

- Ending with right column: `{0: 0}, {1: 1}, {2: 1}, {3: 3}, {4: 1}, {5: 1}, {8: 1}, {9: 0}, {10: 1}, {11: 2}, {12: 3}, {13: 2}`
- 16 predecessors for `O.`

3.  Predecessors: `0: [9, 6], 1: [8], 2: [4], 4: [2], 6: [0], 8: [1], 9: [0]`

- Ending with right column: `{0: 0}, {1: 1}, {2: 1}, {4: 1}, {6: 0}, {8: 1}, {9: 0}`
- 4 predecessors for `O.O`

Hence, there are one predecessor that ends in 1, one in 2, one in 4, and one in 8. Summing these values, the answer is 4 possible predecessors. This matches the previous calculation!

### Trivia

After some research, I came across a 1974 paper by Jean Hardouin-Duparc titled [_Paradis terrestre dans l'automate cellulaire de Conway_](http://www.numdam.org/item?id=ITA_1974__8_3_63_0) (Garden of Eden in Conway's cellular automata). In it, he describes a similar method to find Garden of Edens in Conway's Game of Life. Since Garden of Edens have no predecessors, this problem and his work go hand in hand with each other. Although his work is more complex than my solution, he had the same idea of splitting a grid into rows to help find predecessors of nearby rows. Using nondeterministic and deterministic finite automaton, he took these possible predecessors and found their complementary set, resulting in patterns that don't have any predecessors. Eventually, this will yield a Garden of Eden split into rows.

Like this solution, his method only takes time exponential to the grid's width or height rather than its area. With his research, Harduoin-Duparc attempted to search for the narrowest possible Garden of Eden. In his same paper, he proved that no Garden of Edens of height 1 exist. For height 2, he complains how his automaton cannot be developed due to the memory constraints of his computer (a whopping 131,072 bytes), and failed to find any up to height 5. He did find two very narrow ones, which had bounding boxes of 122 × 6 and 117 × 6.

### Final Thoughts

I've had a lot of fun going through this problem and it introduced me to a new branch of math. The most I've delved before in cellular automata was creating small Game of Life simulations for school assignments, and my research broadened my view on Conway's creation and what lies underneath it.

Although this problem is over, I'm still curious about several questions:

- As long as the given grid is narrow, its height doesn't significantly affect the running time. Is there an algorithm that runs faster for square grids?
- Splitting the grid into rows can be thought of several one-dimensional cellular automata. Since the bottleneck of this algorithm is finding predecessors of the rows, can techniques used for one-dimensional automata be applied to this step?
- Instead of splitting the grid into columns or rows, will other splitting methods improve the algorithm (e.g. half-columns or 2x2 blocks)?
- Google's problem asked for the number of predecessors of a grid. How much harder is it to list those predecessors?

<!--

### Wolfram Code

The most basic form of a cellular automaton is an elementary cellular automaton. It is 1-dimensional, contains two states (0 and 1), and its evolution rules depend on the current state of the cell is its two immediate neighbours.

Since these rules depend only on the state of three cells, all of its results can be described in 2^3 = 8 patterns. Along with two possible states per cell, this yields 2^8 = 256 possible rules for elementary automaton. These rules are often labeled with a unique naming convention called a Wolfram Code.

| current state | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
| :-----------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| next state    |  _  |  _  |  _  |  _  |  _  |  _  |  _  |  _  |

-->
