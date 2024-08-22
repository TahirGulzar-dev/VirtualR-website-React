import { resourcesLinks, platformLinks, communityLinks } from '../constants'

function Footer() {
  return (
    <footer class="mt-20 border-t py-10 border-neutral-700">
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        <div>
          <h3 class="text-md font-semibold mb-4">Resources</h3>
          <ul class="space-y-2">
            {resourcesLinks.map((val,index)=>(
              <li key={index}>
              <a class="text-neutral-300 hover:text-white" href="#">
                {val.text}
              </a>
            </li>
            ))}
          </ul>
        </div>
       

        <div>
          <h3 class="text-md font-semibold mb-4">Platforms</h3>
          <ul class="space-y-2">
            {platformLinks.map((val,index)=>(
              <li key={index}>
              <a class="text-neutral-300 hover:text-white" href="#">
                {val.text}
              </a>
            </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 class="text-md font-semibold mb-4">Community</h3>
          <ul class="space-y-2">
            {communityLinks.map((val,index)=>(
              <li key={index}>
              <a class="text-neutral-300 hover:text-white" href="#">
                {val.text}
              </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
