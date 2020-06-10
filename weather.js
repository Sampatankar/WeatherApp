class Weather {
  constructor() {
    this.apiKey = 'your api key';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API:
  //Reponse variable:
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/g/${this.state}/${this.city}.json`);

    //Response data:
    const reponseData = await reponseData.json();

    return responseData.current_observations;
  }

  //Change the weather location:
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}