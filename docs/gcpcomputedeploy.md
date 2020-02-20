## CollBeet Admin on GCP Compute Engine.

Deploying CollBeet Admin on GCP Compute Engine is a simple two-step process. Just follow the below given steps and your Dashboard will be deployed in no time.

### Index
* [Step 1: Create A VM Instance](#create-a-vm-instance)
* [Step 2: Deploy CollBeet Admin](#deploy-collbeet-admin)
* [Resources](#resources)

---

### Create A VM Instance:

1. Go to [GCP Compute Page](https://cloud.google.com/compute) and select `Go To Console`. (**Note**: Sign in using your Google Account if `Go To Console` is not showing up.)

1. Create a VM Instance by clicking, `Create Instance`.

1. For VM Instance, we will keep most of configuration's as default. Just change the following two configurations:
    
    1. **Change** Boot Disk to `Ubuntu 16.04 LTS`.
    1. **Enable** both `Allow HTTP traffic` & `Allow HTTPS traffic`.
    
1. Once Changed, Click on `Create`.

**That's It!!** Step-1 is now complete. We will now proceed to Step-2 and deploy our code.

---

### Deploy CollBeet Admin

1. **Fork** the repo.

1. **Clone** the repository to your local machine using following command,

    `git clone your-repo-url`
    
1. Go to **root** directory,

    `cd CollBeet-Admin`
    
1. We will be using [Meteor Up](http://meteor-up.com/) (MUP), to deploy our code on server. You can install **MUP** using following command,

    `$ npm install --global mup`
    
1. Once MUP is installed, run following command,

    `meteor npm install --save @babel/runtime && mkdir .deploy && cd .deploy && mup init`
    
    **Note:** If you get an error saying `Meteor command not found`, this means you do not have Meteor installed in your machine. You can install it from [here](https://www.meteor.com/install).

    
1. Generate an SSH Key on your machine. [Guide Here](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#createsshkeys)

1. Locate the generated SSH Key. [Guide Here](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#locatesshkeys). Open it using [VIM](https://www.keycdn.com/blog/vim-commands) or any other command line editors in your terminal, and copy the entire SSH key.

1. Add the copied SSH Key to your Compute Instance. [Guide Here](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#instance-only)
    
1. Open your **root** directory using [VSCode](https://code.visualstudio.com/) or any other editor, and open `.deploy` folder. In this folder, open `mup.js`, in this file you need to change/add following details:

    1. In `servers` section, Change `host` field with the **External IP** of your VM Instance.
    1. In `username` field, add **username** you used for generating SSH key.
    1. In `app` section, change `name` field with your app name. For example: `collbeetapp3000`
    1. In `docker` section, change `image` field with following docker image - **abernix/meteord:node-12.14.0-base**
    
 1. Locally set up the remote servers you have specified in your config by running the following command,
 
    `mup setup --verbose`
    
    **Note**: If you face `Error: All configured authentication methods failed` during this command. Run `ssh-add -K [PATH_TO_GENERATED_SSH_KEY]` and try running `mup setup --verbose` command again.
    
 1. Deploy the code.
 
    `mup deploy --verbose`
    
 **WooHoo!!** CollBeet Admin is now up and running on GCP Cloud. You can use either choose to keep using External IP as your preffered choice or setup HTTPs using a custom domain for more security. 
 
 If successfull proceed to [setup stage](https://github.com/kalol-institute-of-technology/CollBeet-Admin#setup). If you are facing some issues in deployment, do try going through some of the following resources.
 
 ---
 
### Resources
 
 1. Meteor Up [Documentation](http://meteor-up.com/docs.html)
 1. GCP Compute Engine [Documentation](https://cloud.google.com/compute/docs)
 1. Regarding SSH Setup [Documentation](https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys#addkey)
 1. Setting up Custom Domain with GCP Compute Engine [here](https://www.youtube.com/watch?v=4iciq0ck8Ns)
