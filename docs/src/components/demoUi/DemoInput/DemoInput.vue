<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import Input from "../../ui/Input";
import { Button } from "../../ui/Button";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Input` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Input` },
  { label: "yarn", code: `yarn dlx vueon-ui add Input` },
  { label: "bun", code: `bunx vueon-ui add Input` }
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props Data
const inputProps = [
  {
    component: "Input",
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        description: "Label text shown above the input."
      },
      {
        name: "placeholder",
        type: "string",
        required: false,
        description: "Placeholder text when no value is provided."
      },
      {
        name: "type",
        type: `"text" | "email" | "password" | "date" | etc`,
        required: false,
        default: `"text"`,
        description: "Sets the input type."
      },
      {
        name: "stage",
        type: `"warning" | "error" | "success"`,
        required: false,
        description: "Shows validation styling."
      },
      {
        name: "stageMessage",
        type: "string",
        required: false,
        description: "Message displayed below the input."
      }
    ]
  }
];

// Form state for preview
const email = ref("");
const password = ref("");
// const emailStage = ref("default");
// const passwordStage = ref("default");
const emailStage = ref<"error" | "warning" | "success" | undefined>(undefined);
const passwordStage = ref<"error" | "warning" | "success" | undefined>(undefined);

const emailMessage = ref("");
const passwordMessage = ref("");

const validateForm = () => {
  // emailStage.value = passwordStage.value = "default";
  // emailMessage.value = passwordMessage.value = "";
  emailStage.value = passwordStage.value = undefined;
emailMessage.value = passwordMessage.value = "";


  if (!email.value.includes("@")) {
    emailStage.value = "error";
    emailMessage.value = "Invalid email address";
  } else {
    emailStage.value = "success";
    emailMessage.value = "Looks good!";
  }

  if (password.value.length < 6) {
    passwordStage.value = "error";
    passwordMessage.value = "Password too short";
  } else {
    passwordStage.value = "success";
    passwordMessage.value = "Strong password!";
  }
};
</script>

<template>
  <main class="space-y-10">

    <div>
      <section
        class="border border-border rounded-t-md p-10 flex flex-col gap-8"
      >
        <!-- Normal Inputs -->
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Pick a Date" type="date" />

        <!-- Validation Example -->
        <div class="space-y-3">
          <Input
            v-model="email"
            placeholder="Email"
            :stage="emailStage"
            :stageMessage="emailMessage"
          />

          <Input
            v-model="password"
            type="password"
            placeholder="Password"
            :stage="passwordStage"
            :stageMessage="passwordMessage"
          />

          <Button @click="validateForm">Submit</Button>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Input label='Name' placeholder='Enter your name' />
<Input label='Pick a Date' type='date' />

<!-- Validation example -->
<Input v-model='email' placeholder='Email' :stage='emailStage' :stageMessage='emailMessage' />
<Input v-model='password' type='password' placeholder='Password' :stage='passwordStage' :stageMessage='passwordMessage' />
<Button @click='validateForm'>Submit</Button>`"
        />
      </section>
    </div>


    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>


<!-- stages show -->
    <div>
      <h2 id="stages" class="text-2xl font-bold mb-0.5">stages</h2>

      <section
        class="border border-border rounded-t-md p-10 flex flex-col gap-8 items-center"
      >
        <!-- Default -->
        <Input placeholder="normal" />

        <!-- Error -->
        <Input
          placeholder="Error input"
          stage="error"
          stageMessage="Something went wrong"
        />

        <!-- Success -->
        <Input
          placeholder="Success input"
          stage="success"
          stageMessage="All good!"
        />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Input placeholder='normal' />

<Input
  placeholder='Error input'
  stage='error'
  stageMessage='Something went wrong'
/>

<Input
  placeholder='Success input'
  stage='success'
  stageMessage='All good!'
/>`"
        />
      </section>
    </div>

    <section>
      <p class="text-2xl font-bold mb-0.5">Usage Variants</p>
      <CodeBlock
        :highlight-lines="[5,6,10,12]"
        filename="src/App.vue"
        :code="`<Input placeholder='normal' />

<Input
  placeholder='Error input'
  stage='error'
  stageMessage='Something went wrong'
/>

<Input
  placeholder='Success input'
  stage='success'
  stageMessage='All good!'
/>`"
      />
    </section>

    <!-- live -->
    <div>
      <section
        class="border border-border rounded-t-md p-10 flex flex-col gap-8"
      >
      <h2 id="live_example" class="text-2xl font-bold mb-0.5">live example</h2>


        <div class="space-y-3">
          <Input
            v-model="email"
            placeholder="Email"
            :stage="emailStage"
            :stageMessage="emailMessage"
          />

          <Input
            v-model="password"
            type="password"
            placeholder="Password"
            :stage="passwordStage"
            :stageMessage="passwordMessage"
          />

          <Button @click="validateForm">Submit</Button>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Input v-model='email' placeholder='Email' :stage='emailStage' :stageMessage='emailMessage' />
<Input v-model='password' type='password' placeholder='Password' :stage='passwordStage' :stageMessage='passwordMessage' />
<Button @click='validateForm'>Submit</Button>`"
        />
      </section>
    </div>
    <!-- ============================== -->
    <!-- 📑 PROPS -->
    <!-- ============================== -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in inputProps"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div class="mt-3 space-y-5 border-l border-primary/50 px-4">
              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
              >
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>
                  <Badge variant="informative">: {{ prop.default }}</Badge>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>
