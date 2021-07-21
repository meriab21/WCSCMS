<template>
  <v-timeline>
    <v-timeline-item
      v-for="(day, i) in days"
      :key="i"
      :color="day.color"
      small
    >
    
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${day.color}--text`"
          v-text="day.day"
        ></span>
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${day.color}--text`">
          Lorem ipsum
          
        </h2>
      
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      days: [
        {title:'Rejected',
          color: 'red',
          day: '15 days',
        },
        {
          color: 'green',
          day: '2 days',
        },
        {
          color: 'purple',
          day: '7 days',
        },
      
      ],
    }),
  }
</script>