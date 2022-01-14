import sys,os,io
import math 
from collections import defaultdict
def ii():
    return int(input())
def li():
    return list(map(int,input().split()))
if(os.path.exists('input.txt')):
    sys.stdin = open("input.txt","r") ; sys.stdout = open("output.txt","w") 
# else:
#     input = io.BytesIO(os.read(0, os.fstat(0).st_size)).readline


def solve():
    n,m = li()
    a = li()
    l = []
    for i in range(m):
        l.append([a[i] , i])
    l = list(sorted(l,key = lambda x:x[1], reverse=True))
    
    l = list(sorted(l,key = lambda x:x[0], reverse=False))

    # print(l)
    fill = [0]*m 
    ans = 0
    for x,y in l:
        ans += sum(fill[:y])
        fill[y] = 1 
    print(ans)


t = 1
t = ii()
for _ in range(t):
    solve()

