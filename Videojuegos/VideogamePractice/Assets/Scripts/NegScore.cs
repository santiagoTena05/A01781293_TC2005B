/*
Detects when a mob touches the character and proceeds to restart the game
Author: Santiago Tena & Domingo Mora
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class NegScore : MonoBehaviour
{
    [SerializeField] Score scoreObj;

    // Here the instruction indicates the following: If a mob comes in contact with the character, the game restarts
    void restart(){
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
    // Here the instruction indicates the following: Call the function "Restart" when the mob hits the Object "Player"
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            restart();
        }
    }


}
