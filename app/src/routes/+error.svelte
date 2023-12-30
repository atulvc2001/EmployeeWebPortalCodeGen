<script>
    import { page } from '$app/stores';
</script>

<div class="error-box">
    <h1>{$page.error.message}</h1>
</div>

<style>

    .error-box{
        text-align: center;
        border:5px solid  #673052;
        border-radius: 20px;
        width:50%;
        margin:auto;
        color:#673052;
        /* padding: 100px; */
        /* margin: ; */
    }
    

</style>