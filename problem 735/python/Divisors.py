bigN=pow(10,5)
numberOfDivisors=(bigN*3)-3;

for i in range(bigN+1):
    divisor=3
    # n=i
    # twoNsq=2*(i*i)
    while divisor <= (i-1):
        # reminder=twoNsq%divisor
        if 2*(i*i) % divisor ==0 :
            numberOfDivisors=numberOfDivisors+1;
            # print(numberOfDivisors)
        divisor+=1

# print the result
print(numberOfDivisors)