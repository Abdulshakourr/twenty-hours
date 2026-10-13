// Package weather helps forecast the current weather condition of various cities.
package weather

var (
    //CurrentCondition stores the current condition of the city.
	CurrentCondition string
    //CurrentLocation store the location of the city.
	CurrentLocation  string
)

//Forecast fucntion takes the city,condition and returns curent city and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
