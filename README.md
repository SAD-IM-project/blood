<h1 style="text-align: center">Lost & Found</h1>

<h4 style="text-align: center; color:gray">SA&D Group 10</h4>


<br/>

## How to run our code
You can choose either way to run our code.
- Clone our repo from github [lost_and_found](https://github.com/SAD-IM-project/lost_and_found)
- Unzip `group10_milestone4`. The project folder is `./group10_milestone4/lost_and_found`<br/>*Notice: If you choose this way, you can skip step 2 and 3 in next section.*

If you encounter any problem, feel free to [email](ansonwu0604@gmail.com) us.

## Clone and run locally

1. Run `npm install` to install the required modules.

2. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

    > Notice: If you want to use our existing database, you can ignore this step.

3. Add `.env.local` and add the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

    > Notice: If you're using our supabase. You should copy the below code into `.env.local`.

    ```
    NEXT_PUBLIC_SUPABASE_URL=https://okrjiftennxipohnrbbw.supabase.co
    NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rcmppZnRlbm54aXBvaG5yYmJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NjI2NzYsImV4cCI6MjAzMDEzODY3Nn0.JuH-eYkmPYsdHxMJSyAHxPSeKuLsYads2ZXrt5EHB7c
    ```

4. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The website should now be running on [localhost:8888](http://localhost:8888/).

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Run unit test
1. ```npm run test```