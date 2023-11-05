<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
</script>

<template>
	<p>Choose what part of this page to see:</p><br>
	<router-link to="/vue-pages/github">Github Search</router-link><br>
	<router-link to="/vue-pages/products">Products</router-link><br>
	<router-link to="/vue-pages/userform">UserForm</router-link><br>
	<div>
		<router-view></router-view>
	</div>
</template>

<style>
div {
    padding: 10px;
    margin: 10px;
    display: inline-block;
}
</style>