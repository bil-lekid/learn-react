import React from "react";

function Card({ username = "Gaben", post = "Not assigned yet" }) {
  console.log(username);

  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2F2%2F3%2F181521.jpg&f=1&nofb=1&ipt=a29ea6877633461e5beabbfd1e27904d8821fd351868782e4ac4496314b62d06&ipo=images"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              at!
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {post}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
