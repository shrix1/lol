import { createClient } from "@supabase/supabase-js";

export const POST = async (request: Request) => {
  const { e, p } = await request.json();
  const email = e;
  const password = p;

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase.from("lol").insert({
    email,
    password,
  });

  console.log(data);
  console.log(error);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return new Response(JSON.stringify("Login successfully"), { status: 200 });
};
