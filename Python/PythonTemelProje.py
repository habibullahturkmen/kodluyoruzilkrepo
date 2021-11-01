"""
1- Bir listeyi düzleştiren (flatten) fonksiyon yazın.
   Elemanları birden çok katmanlı listelerden ([[3],2] gibi) oluşabileceği gibi,
   non-scalar verilerden de oluşabilir. Örnek olarak:

   Input: [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]
   Output: [1, 'a', 'cat', 2, 3, 'dog', 4, 5]
"""

n = [[1, 'a', ['cat'], 2], [[[3]], 'dog'], 4, 5]


def flatten(x):
    if len(x) == 0:
        return x
    if isinstance(x[0], list):
        return flatten(x[0]) + flatten(x[1:])
    return x[:1] + flatten(x[1:])


print(flatten(n))

"""
2- Verilen listenin içindeki elemanları tersine döndüren bir fonksiyon yazın.
   Eğer listenin içindeki elemanlar da liste içeriyorsa onların elemanlarını da tersine döndürün.
   Örnek olarak:

   Input: [[1, 2], [3, 4], [5, 6, 7]]
   Output: [[[7, 6, 5], [4, 3], [2, 1]]

"""

n = [[1, 2], [3, 4], [5, 6, 7]]

for i in n:
    i.reverse()
n.reverse()

print(n)
