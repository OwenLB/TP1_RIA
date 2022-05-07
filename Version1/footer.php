</div>

<script>
    (function() {
        document.getElementById("addProduct").addEventListener('click', add_product1);

        function add_product() {
            var myForm = document.getElementById("myform")
            formData = new FormData(myForm);

            $.ajax({
                url: "/api/add",
                method: "POST",
                data: formData,
                success: function(response) {
                    document.getElementById("disp").innerHTML = response;
                },
                error: function() {
                    alert("error");
                }
            });
        }

        function add_product1() {
            var url = "/TP1_RIA/Version1/api/add";

            var xhr = new XMLHttpRequest();
            xhr.open("PUT", url);

            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    console.log(xhr.responseText);
                }
            };

            var data = `{
            "name": "test",
            "price": 10.00
            }`;

            xhr.send(data);
        }
    })();
</script>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>