import Layout from "@/components/layout";
import Link from "next/link";

export default function Other() {
  const title = "Other";

  return (
    <div>
      <Layout header="Next.js" title="Other page.">
        <div className="card p-4 text-center">
          <h3 className="mb-4">This is Other page...</h3>
          <div className="card p-3">
            <p>これは、もう1つのページの表示です。</p>
            <Link href="/" legacyBehavior>
              <a>&lt;&lt; Black to Index page</a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
