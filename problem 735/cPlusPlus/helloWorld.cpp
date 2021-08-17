#include <iostream>
#include <math.h>


// what?
using namespace std;


int main() {
    char base=10;
    char exponet=5;
    int bigN=pow(base,exponet);
    int numberOfDivisors=(bigN*3)-3;
    

    //starting computations
    for (long long i = 1; i <= bigN; i++)
    {
      
    //   long long twoNsq=2*(i*i);
      int divsor=3;
    //   cout << divsor ;
      while (divsor <= (i-1)){
          //check if twoNsq is divisible by i
          if( 2*(i*i) %divsor == 0){
              numberOfDivisors++;
          }
          divsor++;
      }
      

    }
    
    cout << numberOfDivisors ;
    return 0;
}