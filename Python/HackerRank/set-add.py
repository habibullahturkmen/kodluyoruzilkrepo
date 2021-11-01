# get input
n = int(input())
# create an empty set
s = set('')

# add elements to the empty set
i = 0
while i < n:
    s.add(input())
    i += 1

# print the set's length
print(len(s))
