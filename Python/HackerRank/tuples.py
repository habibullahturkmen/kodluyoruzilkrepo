# Solution 1
n = int(input())
my_list = input().split(" ")

for i in range(n):
    my_list[i] = int(my_list[i])

my_tuple = tuple(my_list)
print(hash(my_tuple))

# Solution 2
print(hash(tuple(list(map(int, input().split(" "))))))
