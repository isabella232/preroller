A GET vs POST normally doesn't matter but I was hoping that it would be possible to do a GET without admin-ajax. It isn't the headers purely which is the problem but the cookies due to the fact that the POST is being done through admin-ajax it isn't sending the OpenX cookies which are on a different domain.
What would be needed at the very least is to send the OX_u cookie which is on ox-d.doucettemedia.com domain.  

Either we'd need to sync the OX_u cookie onto the CFO domain through some method, or we'd need the GET to be done directly to the delivery domain and not through admin-ajax/PHP.

Alternatively, there is another option that could be tested -- which would be adding "xid" to the request to try over-riding the user ID.  
For testing in their environment they would need to make a simple modification, all that would be needed is to change the VAST URL from:
ox-d.doucettemedia.com/v/1.0/av?auid=12345
to
ox-d.doucettemedia.com/v/1.0/av?auid=12345&xid=78910

where "12345" is the adunit ID they wish to use, and "78910" is a unique ID for that user (in order for session capping to work, though, they will need to make sure they re-use the same ID for that user on each call -- Wordpress should be able to provide a session/user ID)

ALSO:

Remote Address:173.241.242.12:80
Request URL:http://ox-d.doucettemedia.com/crossdomain.xml
Request Method:GET
Status Code:200 OK
