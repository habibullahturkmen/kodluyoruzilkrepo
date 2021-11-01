from collections import defaultdict

# inputs
n = input().split(" ")
a = int(n[0])
b = int(n[1])

# list_a
group_a = []
for i in range(a):
    group_a.append(input())

# list_b
group_b = []
for i in range(b):
    group_b.append(input())

# create defaultdict object
default_dictionary = defaultdict(list)

# fill default_dictionary with group_a values
for i in range(a):
    default_dictionary[group_a[i]].append(i + 1)

# program logic
for i in group_b:
    if i in default_dictionary:
        print(*default_dictionary[i])
    else:
        print(-1)

'''
Sample Input

STDIN   Function
-----   --------
5 2     group A size n = 5, group B size m = 2
a       group A contains 'a', 'a', 'b', 'a', 'b'
a
b
a
b
a       group B contains 'a', 'b'
b

Sample Output

1 2 4
3 5

https://www.hackerrank.com/challenges/defaultdict-tutorial/problem

'''
