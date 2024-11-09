<!-- components/BusinessModal.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-600 text-xl">&times;</button>
        
        <!-- Modal Content -->
        <div class="text-center">
          <h2 class="text-2xl font-semibold mb-4">Learn from our very best</h2>
          <p class="text-gray-700 mb-6">
            Our Udemy Business collection is a curation of top-rated courses for individuals and organizations to upskill and reach their goals.
          </p>
          
        
          <img src="/logos/fresh.jpg" alt="Udemy Icon" class="mx-auto mb-6" />
  
          <!-- Content Sections -->
          <div class="flex flex-col items-center space-y-4 text-gray-600">
            <div>
              <h3 class="font-semibold">Always fresh</h3>
              <p class="text-sm">We add to the collection based on market trends and feedback from learners and their organizations.</p>
            </div>
            <div>
              <h3 class="font-semibold">Data driven</h3>
              <p class="text-sm">We curate the collection based on unique data points to identify new and emerging skills.</p>
            </div>
            <div>
              <h3 class="font-semibold">Better every day</h3>
              <p class="text-sm">We continuously refine the collection to help learners and businesses stay one step ahead.</p>
            </div>
          </div>
  
          <!-- Divider Line -->
          <hr class="my-6" />
  
          <!-- Logo Section -->
          <div class="text-center">
            <p class="text-sm text-gray-600 mb-4 font-semibold">Trusted by organizations of all sizes</p>
            <div class="flex justify-center space-x-4 mb-4">
              <img src="/logos/nasdaq.png" alt="Nasdaq" class="h-8 grayscale" />
              <img src="/logos/volkswagen.svg" alt="Volkswagen" class="h-8 grayscale" />
              <img src="/logos/box-dark.svg" alt="Box" class="h-8 grayscale" />
              <img src="/logos/netapp-dark.svg" alt="NetApp" class="h-8 grayscale" />
              <img src="/logos/eventbrite-dark.svg" alt="Eventbrite" class="h-8 grayscale" />
            </div>
            <button class="bg-purple-600 text-white py-2 px-4 rounded-full">Try Udemy Business</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    }
  });
  
  const emits = defineEmits(['close']);
  
  function closeModal() {
    emits('close');
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  