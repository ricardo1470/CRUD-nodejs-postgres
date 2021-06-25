> # <a href="url"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" align="middle" width="100" height="60"></a> DataBase
---
## Install from package.json
* `npm i`

## Install PostgreSQL
* `sudo apt update`
* `sudo apt install postgresql postgresql-contrib`
* `sudo service postgresql start [stop, status, reload, restart]`

## version postgresql
`sudo -u postgres psql -c "SELECT version();"`

## rum server in dev
* `npm run dev`

## start postgres shell
* `sudo -u postgres psql`
* `pass= root`

## Basic postgres commands
* `\q`: Quit
* `\c` __database__: Connect to a database
* `\d` __table__: Show table definition including triggers
* `\dt` *.*: List tables from all schemas (if *.* is omitted will only show SEARCH_PATH ones)
* `\l`: List databases
* `\dn`: List schemas
* `\df`: List functions
* `\dv`: List views
* `\timing`: Show query timing stats
---
> ## Built with
this project was built in: `Nodejs`, `ejs`, `Express`, `PostgreSQL`

---
> ## Expressions of Gratitude
---
* `Tell others about this project`
* `invite you for a beer` 🍺 `or a coffee` ☕
---
> ## Contact 💬
> Ricardo Camayo
### | [twitter](https://twitter.com/RICARDO1470) | [linkedin](https://www.linkedin.com/in/ricardo-alfonso-camayo/) | [mail](1466@holbertonschool.com) | [github](https://github.com/ricardo1470/README/blob/master/README.md) |

---

## License
*<a href="url"><img src="https://www.apsl.net/media/apslweb/images/postgresql-logo.width-900.png" align="middle" width="100" height="60"></a>`DataBase` is open source and therefore free to download and use without permission.*

<a href="url"><img src="https://www.holbertonschool.com/holberton-logo.png" align="middle" width="100" height="30"></a>

---
