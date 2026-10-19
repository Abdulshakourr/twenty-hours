package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	rate := successRate / 100

	return float64(productionRate) * rate
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
		// step one calculate how many cars perhour
	rate := successRate / 100
	carsPerhour := float64(productionRate) * rate

	carsPerMinute := carsPerhour / 60
	return int(carsPerMinute)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	tens := carsCount / 10
	ones := carsCount % 10

	result := tens*95000 + ones*10000

	return uint(result)
}
