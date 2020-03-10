"""
Implement these two search algorithms.
"""


def linear_search(number, list):
        for i in range(1,100):
            if (list[i] == number):
                return i
        return None


def binary_search(number,list):
    first = 0
    last = len(list) - 1
    while (first <= last):
        mid = (first + last) // 2
        if list[mid] == number:
            return mid
        else:
            if number < list[mid]:
                last = mid - 1
            else:
                first = mid + 1
    return None




def print_results(search, index):
    result = search.title() + ' search '

    if index is None:
        result += 'did not find it.'
    else:
        result += f'found it on index {index}.'

    print(result)


def main():
    numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97]
    searched_number = int(input('What is the number you are looking for? (0-100) '))

    print_results('linear', linear_search(searched_number, numbers))
    print_results('binary', binary_search(searched_number, numbers))


if __name__ == '__main__':
    main()
