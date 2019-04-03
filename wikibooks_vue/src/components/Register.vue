<template>
    <div id="register">
        <h2>Register Form</h2>
        <input class="form-control" style="margin: 10px;" type="text" placeholder="Name" />
        <input class="form-control" style="margin: 10px;" type="email" placeholder="Email Address" />
        <input class="form-control" style="margin: 10px;" type="password" placeholder="Pick a Password" />
        <input class="form-control" style="margin: 10px;" type="password" placeholder="Confirm Password" />
        <button class="btn btn-primary">
            <i class="fas fa-plus"></i> 회원 가입
        </button>
    </div>
</template>

<script>
export default {
    created() {
        console.log("REGISTER Component")
    }
}
</script>