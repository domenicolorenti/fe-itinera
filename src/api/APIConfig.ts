class APIConfig {
    
    //currently the only server
    public static SERVERIP:string  = "http://localhost";

    //all combination ip:port for mappig each back-end
    public static PROFILEADDRESS: string = `${this.SERVERIP}:8080`;
    public static SEARCHADDRESS: string = `${this.SERVERIP}:8081`;
    public static REVIEWADDRESS: string = `${this.SERVERIP}:8082`;
    public static PHOTOADDRESS: string = `${this.SERVERIP}:8083`;
    public static RANKINGADDRESS: string = `${this.SERVERIP}:8000`;

}

export {APIConfig};