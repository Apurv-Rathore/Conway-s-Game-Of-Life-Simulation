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
    n = ii()
    l = [list(input())]
    l.append(list(input()))
    done = [0]*n 
    for i in range(1,n):
        if done[i]==1 or done[i-1]==1:
            continue 
        if set([l[0][i],l[1][i]])==set(['0','1']):
            continue
        if set([l[0][i-1],l[1][i-1]])==set(['0','1']):
            continue
        if '0' in [l[0][i],l[1][i]]:
            if set([l[0][i-1],l[1][i-1]])==set(['1']):
                done[i]=1
                done[i-1]=1 
                continue
        if '0' in [l[0][i-1],l[1][i-1]]:
            if set([l[0][i],l[1][i]])==set(['1']):
                done[i]=1
                done[i-1]=1 
                continue
    
        
    # print(done)
    one = 0
    two = 0
    p = 0
    for i in range(n):
        if done[i]:
            continue
        x = [l[0][i],l[1][i]]
        if '0' in x:
            if '1' in x:
                two+=1 
            else:
                one+=1
    print(two*2 + one + sum(done))



t = 1
t = ii()
for _ in range(t):
    solve()

