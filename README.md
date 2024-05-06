# Cloudflare - Code Club Week 3: Origins and Bots

## Session 3: [Slides](https://docs.google.com/presentation/d/15qnUk-id_Ecxtl3YqKPMGn1p6vzo_pVJjkShV4vttY4/edit#slide=id.g156a26f3e25_1_63)


- Put your worker on a custom domain on one of your zones. Modify your worker so that GET request traffic is passed on to your origin rather than getting a response from the worker
- Add a new condition to your worker to handle suspected bots based on bot score <30 differently. Send traffic from suspected bots to a different origin.
You can use a publicly accessible “echo” endpoint like httpbin.org/get if you don’t have an additional origin
You can generate automated test traffic with cURL
