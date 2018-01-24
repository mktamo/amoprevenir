public static ClientResponse SendSimpleMessage() {
    Client client = Client.create();
    client.addFilter(new HTTPBasicAuthFilter("api", "key-e0634acdba602f88073cfb178623dc8b"));
    WebResource webResource = client.resource("https://api.mailgun.net/v3/sandbox481c37d4915a45aea9be98cbcae8fdec.mailgun.org/messages");
    MultivaluedMapImpl formData = new MultivaluedMapImpl();
    formData.add("from", "Mailgun Sandbox <postmaster@sandbox481c37d4915a45aea9be98cbcae8fdec.mailgun.org>");
    formData.add("to", "Marketing <bruno.silva@amonet.com.br>");
    formData.add("subject", "Hello Marketing");
    formData.add("text", "Congratulations Marketing, you just sent an email with Mailgun!  You are truly awesome!");
    return webResource.type(MediaType.APPLICATION_FORM_URLENCODED).
                                        post(ClientResponse.class, formData);
}
