import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useAppContext } from "../context/AppContext";
import Cookie from "js-cookie";

import Head from "next/head";
import Link from "next/link";

function Navigation() {
  const { user, setUser } = useAppContext();
  const router = useRouter();

  function handleLogout() {
    setUser(null);
    Cookie.remove("token");
    router.push("/");
  }

  return (
    <header className="bg-blue-800">
      <nav className="flex justify-between p-6 px-4">
        <div className="flex justify-between items-center w-full mx-16">
          <div className="xl:w-1/3">
            <Link
              className="block text-2xl max-w-max text-white font-medium"
              href="/"
            >
              Info Restoran Banyuwangi
            </Link>
          </div>

          <div className="xl:block xl:w-1/3">
            <div className="flex items-center justify-end">
              <Link
                className="text-gray-50  hover:text-yellow-200 font-bold"
                href="/"
              >
                Home
              </Link>
              
              <div className="flex items-center justify-end">
              <Link
                className="text-gray-50  py-2 px-4 hover:text-yellow-200 font-bold"
                href="/dish"
              >
                Dish
              </Link>
              </div>

              <div className="hxl:block">
                {user ? (
                  <div className="flex items-center justify-end">
                    <span className="inline-block py-2 px-4 mr-2 leading-5 text-gray-50  hover:text-gray-100 bg-transparent font-medium rounded-md">
                      {user.username}
                    </span>
                    <button
                      className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-end">
                    <Link
                      className="inline-block py-2 px-4 mr-2 leading-5 text-gray-50  hover:text-yellow-200 font-bold bg-transparent rounded-md"
                      href="/login"
                    >
                      Log In
                    </Link>
                    <Link
                      className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-600 hover:bg-blue-700 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                      href="/register"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function Layout(props) {
  const title = "Info Restoran Banyuwangi";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <div className="container mx-auto px-4">{props.children}</div>
    </div>
  );
}