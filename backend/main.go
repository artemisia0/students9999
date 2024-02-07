package main

import (
	"github.com/gin-gonic/gin"
)


func main() {
	router := gin.Default()

	router.Static("/static", "frontend/build/static")
	
	router.GET("/home", getHome)
	
	router.Run("localhost:8080")
}

func getHome(c *gin.Context) {
	c.File("frontend/build/index.html")
}
