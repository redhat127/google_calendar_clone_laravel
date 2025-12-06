import { LoginForm } from '@/components/form/login-form';
import { BaseLayout } from '@/components/layout/base';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GithubIcon } from '@/components/ui/icons/github';
import { GoogleIcon } from '@/components/ui/icons/google';
import { generateTitle } from '@/lib/utils';
import { home } from '@/routes';
import login from '@/routes/login';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Login() {
  return (
    <>
      <Head>
        <title>{generateTitle('Login')}</title>
      </Head>
      <div className="flex h-full items-center justify-center p-4">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader className="gap-1">
            <CardTitle>
              <h1 className="font-bold">Login</h1>
            </CardTitle>
            <CardDescription>Use your email or a provider to login</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
            <div className="flex flex-col gap-2">
              <Button asChild>
                <a href={login.provider.redirect.url({ provider: 'github' })}>
                  <GithubIcon />
                  Continue with Github
                </a>
              </Button>
              <Button asChild variant="orange">
                <a href={login.provider.redirect.url({ provider: 'google' })}>
                  <GoogleIcon />
                  Continue with Google
                </a>
              </Button>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href={home()}>
                <ArrowRight className="h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

Login.layout = (page: ReactNode) => <BaseLayout>{page}</BaseLayout>;
