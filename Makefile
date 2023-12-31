MAX?=1e7

test: one two four eight sixteen thirty-two sixty-four one-hundred-twenty-eight

one:
	@echo "One thread"
	@echo ""
	time node src/calculating-primes/index.js ${MAX}
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 1
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 1
two:
	@echo "Two threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 2
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 2
four:
	@echo "Four threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 4
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 4
eight:
	@echo "Eight threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 8
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 8
sixteen:
	@echo "Sixteen threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 16
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 16
thirty-two:
	@echo "Thirty two threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 32
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 32
sixty-four:
	@echo "Sixty four two threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 64
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 64
one-hundred-twenty-eight:
	@echo "Sixty four two threads"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX} 128
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX} 128

default:
	@echo "Number of threads depends on hardware"
	@echo ""
	time node src/calculating-primes-threads/index.js ${MAX}
	@echo ""
	time node src/calculating-primes-threads-refactored/index.js ${MAX}
