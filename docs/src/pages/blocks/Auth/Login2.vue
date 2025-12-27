<script setup lang="ts">
    import Button from '@/components/ui/Button';
    import Input from '@/components/ui/Input';
    import Separator from '@/components/ui/Separator';
    import { ChromeIcon, TwitchIcon, TwitterIcon } from 'lucide-vue-next';
    
    </script>
    
    <template>
        <section class="h-lvh  rounded-lg flex items-center justify-center">
            <div class="h-full w-full p-2 flex ">

            <div class=" h-full p-2 flex-[0.7]">
                <div class="ring-ring ring-5 rounded-2xl h-12 aspect-square mr-auto text-left bg-muted"></div>
                <h1 class="text-left my-2 text-xl">Login</h1>
                <p class="text-left my-2 text-md text-secondary">Paragrah of the login pages comes in this content</p>
                <div class="space-y-3 mt-6 mb-4">
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Button class="w-full">Continue</Button>
                </div>
                <Separator/>
                <div class="flex flex-wrap mt-2  gap-2">
                    <Button variant="ghost" class="flex-1 "><ChromeIcon/> Google</Button>
                    <Button variant="ghost" class="flex-1"><TwitterIcon/> Twitter</Button>
                    <Button variant="ghost" class="flex-1"><TwitchIcon/>Twitch</Button>
                </div>
                </div>

            <div class="bg-muted/50 flex-1 rounded"></div>
        </div>

        </section>
    </template>