<body>
    <div class="container">
        <form action="">
            <h1>Choose format to download qr code</h1>
            <select name="qrformats" id="qrformat">
                <option value="png">png</option>
                <option value="jpeg">jpeg</option>
                <option value="eps">eps</option>
            </select>
            <button>download</button>
        </form>
        
    </div>
</body>


<style>
    *{
        font-family: Arial, Helvetica, sans-serif;
    }

    .container{
        border: 5px solid;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -100%);
        padding: 30px;
    }

</style>