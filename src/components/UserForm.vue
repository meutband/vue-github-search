<script>
export default{
    data(){
        return{
            email: "",
            password: "",
            validEmail: false,
            validPassword: false,
            emailMessage: "",
            passwordMessage: "",
            staySignedIn: false,
            signedInMessage: ""
        }
    },
    methods:{
        onSubmit(){
            
            this.validEmail = false;
            if(this.email.length < 6){
                this.emailMessage = "Email should me a minimum of 6 characters";
            }
            else if(this.email.indexOf(" ") >= 0){
                this.emailMessage = "Email cannot contain spaces";
            }
            else{
                this.emailMessage = "";
                this.validEmail = true;
            }

            this.validPassword = false;
            if(this.password.length < 6){
                this.passwordMessage = "Password should me a minimum of 6 characters";
            }
            else if(this.password.indexOf(" ") >= 0){
                this.passwordMessage = "Password cannot contain spaces";
            }
            else{
                this.passwordMessage = "";
                this.validPassword = true;
            }

            if(this.staySignedIn){
                this.signedInMessage = "Will keep you signed in."
            }
            else{
                this.signedInMessage = "Will NOT keey you signed in."
            }

            if(this.validEmail && this.validPassword){
                // alert("Email: " + this.email + "\nPassword: " + this.password + "\n" + this.signedInMessage);
                this.email = "";
                this.password = "";
                this.validEmail = false;
                this.validPassword = false;
                this.staySignedIn = false;
                this.signedInMessage = "";
            }
            // else{
            //     alert(this.emailMessage + "\n" + this.passwordMessage);
            // }
        }
    }
}
</script>
<template>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control">
        </div>
        <div v-if="emailMessage.length > 0" class="alert alert-danger" role="alert">{{ emailMessage }}</div>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control">
        </div>
        <div v-if="passwordMessage.length > 0" class="alert alert-danger" role="alert">{{ passwordMessage }}</div>
        <div class="form-check">
            <input v-model="staySignedIn" class="form-check-input" type="checkbox">
            <label class="form-check-label">Stay signed in?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!-- <br>
    <div class="card">
        <div card="card-body">
            Email: {{ email }}
            <br>
            Password: {{ password }}
        </div>
    </div> -->
</template>