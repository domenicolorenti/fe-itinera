class APIConfig {
    
    //currently the only server
    private static serverIP:string  = "192.168.1.151";

    //all combination ip:port for mappig each back-end
    public static PROFILEADDRESS: string = `${this.serverIP}:8080`;
    public static SEARCHADDRESS: string = `${this.serverIP}:8081`;

    //all end point in order of PBC
    public static LOGIN: string = "/login";

}

export {APIConfig};