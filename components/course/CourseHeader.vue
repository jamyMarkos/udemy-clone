<!-- components/CourseHeader.vue -->
<template>
    <div class="bg-gray-900 text-white py-8 w-full">
        <div class="max-w-screen-lg mx-auto px-6">
            <!-- Breadcrumb -->
            <div class="text-sm text-gray-400 mb-2">
                <span class="hover:underline cursor-pointer">Design</span>
                <span> &gt; </span>
                <span class="hover:underline cursor-pointer">User Experience Design</span>
                <span> &gt; </span>
                <span class="hover:underline cursor-pointer">Figma</span>
            </div>

            <!-- Course Title -->
            <h1 class="text-3xl font-bold mb-2">Learn Figma - UI/UX Design Essential Training</h1>

            <!-- Course Description -->
            <p class="text-lg text-gray-300 mb-4">
                Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach.
            </p>

            <!-- Rating and Students -->
            <div class="flex items-center space-x-2 text-yellow-400 mb-2">
                <span class="text-xl font-semibold">4.4</span>
                <span class="flex space-x-1">
                    <!-- Star icons using SVG -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14" class="text-yellow-400">
                        <path fill="currentColor" d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"/>
                    </svg>
                    <!-- Repeat the SVG for each star as needed -->
                </span>
                <span class="text-sm text-gray-400">(16,954 ratings)</span>
                <span class="text-sm text-gray-400">66,764 students</span>
            </div>

            <!-- Creator Information -->
            <p class="text-sm text-gray-400 mb-4">
                Created by <span class="text-blue-400 hover:underline cursor-pointer">Caleb Kingston</span>
            </p>

            <!-- Additional Info -->
            <div class="flex items-center space-x-4 text-sm text-gray-400">
                <div class="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m.05-5.55v.1h-.1v-.1z"/>
                    </svg>
                    <span>Last updated 6/2023</span>
                </div>

                <div class="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8 8 0 0 1 5.08 16m2.95-8H5.08a8 8 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"/>
                    </svg>
                    <span>English</span>
                </div>

                <div class="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zM5.25 5.5A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75zM5 13.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m10.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM5 16.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m6.75-.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"/>
                    </svg>
                    <span>English [Auto], Arabic [Auto], 13 more</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No additional script needed for this static component.
</script>

<style scoped>
/* Additional styles if needed */
</style>
