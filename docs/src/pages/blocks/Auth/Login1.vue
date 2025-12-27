<script setup lang="ts">
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Separator from '@/components/ui/Separator';
import { ChromeIcon, TwitterIcon } from 'lucide-vue-next';

</script>

<template>
    <section class="h-lvh  rounded-lg flex items-center justify-center">
        <div class=" h-[400px] p-2  w-full max-w-90">
            <div class="ring-ring ring-5 rounded-2xl h-12 aspect-square mx-auto text-center bg-muted"></div>
            <h1 class="text-center my-2 text-xl">Login</h1>
            <div class="space-y-3 mt-6 mb-4">
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Button class="w-full">Continue</Button>
            </div>
            <Separator/>
            <Button variant="ghost" class="w-full my-2"><ChromeIcon/> Google</Button>
            <Button variant="ghost" class="w-full"><TwitterIcon/> TwitterIcon</Button>
        </div>
    </section>
</template>