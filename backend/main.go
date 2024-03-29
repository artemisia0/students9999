package main

import (
	"github.com/gin-gonic/gin"
)


func main() {
	router := gin.Default()

	router.Static("/static", "frontend/build/static")
	
	router.GET("/", getIndex)

	// api := router.Group("/api")
	// Api routing...
	
	router.Run("localhost:8080")
}

func getIndex(c *gin.Context) {
	c.File("frontend/build/index.html")
}
