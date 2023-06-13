class APIConfig {
    
    //currently the only server
    public static SERVERIP:string  = "http://172.20.10.4";

    //all combination ip:port for mappig each back-end
    public static PROFILEADDRESS: string = `${this.SERVERIP}:8080`;
    public static SEARCHADDRESS: string = `${this.SERVERIP}:8081`;
    public static REVIEWADDRESS: string = `${this.SERVERIP}:8082`;

}

export {APIConfig};