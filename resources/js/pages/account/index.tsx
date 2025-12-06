import { ProfileDetailsForm } from '@/components/form/account/profile-details-form';
import { BaseLayout } from '@/components/layout/base';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';
import { generateTitle } from '@/lib/utils';
import { home } from '@/routes';
import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

export default function AccountIndex() {
  const user = useAuth()!;
  return (
    <>
      <Head>
        <title>{generateTitle('Account')}</title>
      </Head>
      <div className="space-y-4 p-4 px-8">
        <Card className="gap-4 py-4">
          <CardHeader className="gap-1">
            <CardTitle>
              <h1 className="font-bold">Account</h1>
            </CardTitle>
            <p>
              <Link href={home()} className="text-sm font-normal text-muted-foreground underline underline-offset-4">
                Back to home
              </Link>
            </p>
          </CardHeader>
        </Card>
        <Card className="gap-4 py-4">
          <CardHeader className="gap-1">
            <CardTitle>
              <h2 className="font-bold">Profile Details</h2>
            </CardTitle>
            <CardDescription>Use form below to update your profile details</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileDetailsForm user={user} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

AccountIndex.layout = (page: ReactNode) => <BaseLayout>{page}</BaseLayout>;
