#A poorly written example of a program in Python. It prompts the user for the number of elements to sum, takes those integers as input, and handles some basic error cases

MAX = 100
def ask_for_number_of_elements():
    """Prompt the user to enter the number of elements and validate the input."""
    while True:
        try:
            n = int(input("Enter the number of elements (1-100): "))
            if 1 <= n <= MAX:
                return n
            else:
                print("Invalid input. Please provide a number between 1 and 100.")
        except ValueError:
            print("Invalid input. Please enter a valid integer.")


def ask_for_elements(n):
    """Prompt the user to enter `n` integers and validate the input."""
    arr = []
    print(f"Enter {n} integers:")
    for _ in range(n):
        while True:
            try:
                num = int(input())
                arr.append(num)
                break
            except ValueError:
                print("Invalid input. Please enter a valid integer.")
    return arr


def main():
   try:
      elements_num = ask_for_number_of_elements()
      elements = ask_for_elements(elements_num)
      total = sum(elements)
      print("Sum of the numbers:", total)
   except KeyboardInterrupt:
      print("\nProgram terminated by user.")
      exit(1)

if __name__ == "__main__":
   main()
