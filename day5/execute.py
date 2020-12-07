seats = [(int("".join(map(lambda x: "1" if x in "BR" else "0", seat.strip())), 2)) for seat in open("input.txt")]
print(max(seats))
print(next(filter(lambda x: x not in seats, range(min(seats), max(seats)))))
