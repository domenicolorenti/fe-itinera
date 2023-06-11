class APIConfig {
    
    //currently the only server
    public static SERVERIP:string  = "http://192.168.1.151";

    //all combination ip:port for mappig each back-end
    public static PROFILEADDRESS: string = `${this.SERVERIP}:8080`;
    public static SEARCHADDRESS: string = `${this.SERVERIP}:8081`;

}

export {APIConfig};