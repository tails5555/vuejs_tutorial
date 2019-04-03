<template>
    <div id="login">
        <h2>Log In</h2>
        <input class="form-control" style="margin: 10px;" type="email" placeholder="Email Address" />
        <input class="form-control" style="margin: 10px;" type="password" placeholder="Password" />
        <button class="btn btn-primary">
            <i class="fas fa-key"></i> 로그인
        </button>
    </div>
</template>

<script>
export default {
    created() {
        console.log("LOGIN Component")
    }
}
</script>