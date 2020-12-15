import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.exceptions.UnirestException;

import org.json.JSONArray;
import org.json.JSONObject;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public class API_Coronavirus {
    //Variables Input--------------------------------------------------------------------------------
    private Integer input_country;
        public Integer getInput_country() {return input_country;}
        public void setInput_country(Integer input_country) {this.input_country = input_country;}

    private Integer input_mode;
        public Integer getInput_mode() {return input_mode;}
        public void setInput_mode(Integer input_mode) {this.input_mode = input_mode;}


    //Variables Output--------------------------------------------------------------------------------
    private int cases = 0;
        public int getCases() {return cases;}
        public void setCases(int cases) {this.cases = cases; }

    private int deaths = 0;
        public int getDeaths() {return deaths;}
        public void setDeaths(int deaths) {this.deaths = deaths;}



    //Generals Functions--------------------------------------------------------------------------------
        //Constructor---------------------------
    public API_Coronavirus(Integer country, Integer mode) throws UnirestException {
        setInput_country(country);
        setInput_mode(mode);

        switch (getInput_mode()){
            case 0: API_StatusByCountry(toCountry(getInput_country())); break;  //Total By Country
            case 1: API_TodayByCountry(toCountry(getInput_country())); break;  //Total By Country
        }


        System.out.println(toCountry(getInput_country())+ " [cases: "+ this.cases+" | deaths: "+this.deaths+"]");
    }

        //Convert Input Country to Name---------------------------
    public static String toCountry(Integer inp){
        String out = "World";
        switch (inp){
            case 0: out = "World"; break;
            case 1: out = "US"; break;
            case 2: out = "FR"; break;
            case 3: out = "GB"; break;
            case 4: out = "DE"; break;
            case 5: out = "IT"; break;
            case 6: out = "ES"; break;
            case 7: out = "IR"; break;
            case 8: out = "RU"; break;
            case 9: out = "BR"; break;
            case 10: out = "CA"; break;
            case 11: out = "IN"; break;
            case 12: out = "CN"; break;
            case 13: out = "JP"; break;

        }
        return out;
    }


        //Make a HttpRequest---------------------------
    @GetMapping("/test-api")
    public ResponseEntity<String> Http (String URL){
        try {
            HttpResponse<JsonNode> response = Unirest
                    .get(URL)
                    .header("accept", "application/json")
                    .asJson();
            //System.out.println(response.getBody().toString());
            return ResponseEntity.ok(response.getBody().toString());
        }catch (UnirestException e){
            System.out.println("unirestexception: "+e);
        }
        return null;
    }


    //Functions by Mode--------------------------------------------------------------------------------
    public String API_StatusByCountry(String inp_country){
            if(inp_country=="World"){
                ResponseEntity<String> response = Http("https://covid19-api.org/api/status");

                JSONArray allitems = new JSONArray(response.getBody());
                for(int i=0; i<allitems.length(); i++){
                    JSONObject item = allitems.getJSONObject(i);
                    this.cases += item.getInt("cases");
                    this.deaths += item.getInt("deaths");
                }
            }
            else {
                ResponseEntity<String> response = Http("https://covid19-api.org/api/status");

                JSONArray allitems = new JSONArray(response.getBody());
                for(int i=0; i<allitems.length(); i++){
                    JSONObject item = allitems.getJSONObject(i);
                    String country = item.getString("country");

                    if(inp_country.equals(country) ){
                        this.cases = item.getInt("cases");
                        this.deaths = item.getInt("deaths");
                    }
                }
            }
        return null;
    }


    public String API_TodayByCountry(String inp_country) throws UnirestException {
        if(inp_country=="World"){
            ResponseEntity<String> response = Http("https://covid19-api.org/api/diff");

            JSONArray allitems = new JSONArray(response.getBody());
            for(int i=0; i<allitems.length(); i++){
                JSONObject item = allitems.getJSONObject(i);
                this.cases += item.getInt("new_cases");
                this.deaths += item.getInt("new_deaths");
            }
        }
        else {
            /*ResponseEntity<String> response = Http("https://covid19-api.org/api/diff/"+inp_country);

            JSONObject item = new JSONArray(response.getBody()).getJSONObject(0);
            this.cases += item.getInt("new_cases");
            this.deaths += item.getInt("new_deaths");*/
            ResponseEntity<String> response = Http("https://covid19-api.org/api/diff");

            JSONArray allitems = new JSONArray(response.getBody());
            for(int i=0; i<allitems.length(); i++){
                JSONObject item = allitems.getJSONObject(i);
                String country = item.getString("country");

                if(inp_country.equals(country) ){
                    this.cases = item.getInt("new_cases");
                    this.deaths = item.getInt("new_deaths");
                }
            }
        }
        return null;
    }
}
