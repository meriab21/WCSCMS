<template>
    <v-container class=my-8>
        <v-row align="center" justify="center" dense>
            <v-col cols="15" sm="9" lg="5">
                <v-card
                class="mx-auto mp-auto"
    style="max-width: 400px;">
                
            <div class="text-center">
                <h1 class="mb-2"> Reset Password</h1>
            </div>
            <v-form>
                <v-text-field label="Enter your email address"
                    name="email"
                    prepend-inner-icon="mdi-email"
                    type="text"
                    class="rounded-0"
                    outlined></v-text-field>
                  <v-text-field label=" Enter newpassword"
                 id="password" 
                    name="password"
                    prepend-inner-icon="mdi-lock"
                class="rounded-0" outlined
                    :type="show ?'text': 
                     'password'"
             :append-icon="show ?'mdi-eye' : 'mdi-eye-off'"   
               @click:append="show=!show">
</v-text-field>
 <v-text-field label="confirm yourpassword" 
                    id="password"
                    name="password"
                    prepend-inner-icon="mdi-lock"
                   class="rounded-0" outlined
                    :type="show ?'text': 
                     'password'"
             :append-icon="show ?'mdi-eye':'mdi-eye-off'"   
               @click:append="show=!show">
</v-text-field>
                    <v-btn class="rounded-0" color="black" x-large block dark >Reset password </v-btn>
            </v-form>
                </v-card>
            </v-col>
        </v-row>
    
            </v-container>
</template>