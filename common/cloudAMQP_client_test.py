from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = "amqp://aqpzvfjz:HKQ_yZ5qnAiNLQuW-67CGOz7iz4ygjqo@donkey.rmq.cloudamqp.com/aqpzvfjz"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {"test":"test"}
    client.sendMessage(sentMsg)

    receivedMsg = client.getMessage()

    assert sentMsg == receivedMsg
    print("passed")


if __name__ == "__main__":
    test_basic()