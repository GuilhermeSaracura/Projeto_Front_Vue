<template>
    <v-card id="c" outlined color="green garken-2">
        <v-card-title style="color: white" class="justify-center">
            {{food.name}}
        </v-card-title>
        <br/>
        <div>
            <v-btn style = "background-color:#008000"
            class="white--text"
            :href=food.link
            target="_blank"> Link da receita </v-btn>
        </div>
        <br/>
        <p
        class="texto"
        >{{food.descrição}}</p>
        
    </v-card>
</template>

<script>
export default {
    props: ["food"]
}
</script>

<style>
.texto{
 color: white;
 text-align: justify;
 max-width: 90%;
 justify-self: center;
 margin-left: 5%;
 margin-right: 5%;
}

#c{
    text-align: center;
}
</style>